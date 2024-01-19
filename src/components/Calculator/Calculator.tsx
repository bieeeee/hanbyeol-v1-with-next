'use client'
import Image from 'next/image';
import styles from './calculator.module.scss';
import { useRouter } from 'next/navigation';
import { close, calculator } from '@images';
import { useRef, useState } from 'react';

interface Debts {
  [key: string]: {
    [key: string]: number;
  }
}

interface Money {
  [key: string]: number;
}

const Calculator = () => {
  const router = useRouter();
  const nRef = useRef<HTMLInputElement>(null);
  const [names, setNames] = useState<Array<string>>([]);
  const [money, setMoney] = useState<Money>({});
  const [debts, setDebts] = useState<Debts>({});
  const [showResult, setShowResult] = useState(false);
  const specialReg = /[^a-zA-Zㄱ-ㅎ가-힣,]/;

  const handleSubmit = () => {
    const input = nRef.current?.value.replace(/\s+/g, '');
    if (!input || !input.includes(',')) {
      alert('Please enter at least one name separated by commas.');
      return;
    }

    if (input.match(specialReg)) {
      alert('Please use only letters and commas.');
      return;
    }

    const names = input?.split(',');
    if (names.some(name => !name)) {
      alert('Empty values are not accepted.');
      return;
    }

    const uniqueNames = [...new Set(names)];
    if (names.length !== uniqueNames.length) {
      alert('Each name needs to be unique.');
      return;
    }

    setNames(names);
  }

  const handleMoney = (e: any, name: string) => {
    const m = e.target.valueAsNumber;
    setMoney(prevMoney => ({
      ...prevMoney,
      [name]: m
    }));
  }
  const totalSpent = Object.values(money).reduce((a, b) => a + b, 0);
  const perPerson = Number((totalSpent / names.length).toFixed(2));

  const handleCalculate = () => {
    if (Object.values(money).length !== names.length || Object.values(money).some(e => isNaN(e))) {
      alert('Please enter value.')
    } else {
      let updatedDebts: Debts = {};
      names.forEach((name1, i) => {
        updatedDebts[name1] = updatedDebts[name1] || {};

        names.forEach((name2, j) => {
          if (i !== j) {
            const amountOwed = (money[name1] || 0) / names.length - (money[name2] || 0) / names.length;

            if (amountOwed !== 0) {
              updatedDebts[name1][name2] = Number(amountOwed.toFixed(2));
            }
          }
        });

        const totalOwedByThisPerson = Object.values(updatedDebts[name1]).reduce((acc: number, val) => {
          return acc + (typeof val === 'number' ? val : 0);
        }, 0);
        if (totalOwedByThisPerson !== undefined) {
          updatedDebts[name1]['total'] = Number(totalOwedByThisPerson.toFixed(2));
        }
      });
      setDebts(updatedDebts);
      setShowResult(true);
    }
  }
  console.log(money)

  return (
    <div className={`${styles.calculatorContainer} folderContainer`}>
      <div className="modalBar">
        <div className="modalBarLeft">
          <Image src={calculator} width={12} height={12} alt="calculator-icon" />
          <p>N빵 계산기</p>
        </div>
        <button
          className="close-modal"
          onClick={() => router.push('/')}
        >
          <Image src={close} width={12} height={12} alt="close-button" />
        </button>
      </div>
      <div className={`${styles.calculatorContent} modal-content`}>
        {names.length === 0 &&
          <div className={styles.nameInput}>
            <p>콤마를 이용하여 1개 이상의 이름을 입력해주세요.</p>
            <input
              ref={nRef}
              type='text'
              required
              placeholder='마요, 케첩, 설탕'
              className='clickedBorder'
            />
            <button type='submit' onClick={handleSubmit} className='close-modal'>
              Submit
            </button>
          </div>
        }
          <div className={styles.moneyInput}>
        {names.length ?
          !showResult ?
          <>
            <p>개별이 사용한 금액을 입력해주세요.</p>
            {names.map((name, i) =>
              <div key={i}>
                <p>{name + ' : '}</p>
                <input
                  type="number"
                  min="1"
                  required
                  onChange={(e) => {
                    handleMoney(e, name)
                  }}
                  className='clickedBorder'
                />
                <p>원</p>
              </div>
            )}
            <button onClick={handleCalculate} className='close-modal'>Submit</button>
            <button onClick={() => { setNames([]); setMoney({}); }} className='close-modal'>Cancel</button>
          </>
            :
            <div className={styles.result}>
            <p>총 사용 금액: {totalSpent}원</p>
            <p>N빵: {perPerson}원</p>
            {names.map((name, i) =>
              <div key={i}>
                <p>{`${name}: ${money[name]}원 지출`}</p>
                {Object.entries(debts[name]).map(([key, value], j) => (
                  <p key={j}>
                    {key == 'total' ?
                      `Total(${perPerson} - ${money[name]}): ${-value}원`
                      :
                      `${key}에게 ${Math.abs(value)}원 ${value < 0 ? '주세요' : '받으세요'}`
                    }
                  </p>
                ))}
              </div>
            )}
            <button onClick={() => { setNames([]); setMoney({}); setShowResult(false); }} className='close-modal'>Reset</button>
          </div>
          :
          null
        }
        </div>
      </div>
    </div>
  )
}

export default Calculator
