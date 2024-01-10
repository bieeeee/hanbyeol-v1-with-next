'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { close, calculator } from '@images';
import { useRef, useState } from 'react';

const Calculator = () => {
  const router = useRouter();
  const nRef = useRef<HTMLInputElement>(null);
  const [names, setNames] = useState<Array<string>>([]);
  const [money, setMoney] = useState<{ [key: string]: number }>({});

  const handleSubmit = () => {
    let input = nRef.current?.value.replace(' ', '');
    if (input === undefined || !input.includes(',')) {
      alert('We need more than one name. Use comma to separate.')
    } else {
      const names = input?.split(',')
      setNames(names)
    }
  }

  const handleMoney = (e:any, name:string) => {
    const m = e.target.valueAsNumber;
    setMoney(prevMoney => ({
      ...prevMoney,
      [name]: m
    }));

  }

  const debts: { [key: string]: { [key: string]: number | undefined } } = {};

  const handleCalculate = () => {
    names.forEach((name1) => {
      debts[name1] = {};

      names.forEach((name2) => {
        if (name1 !== name2) {
          const amountOwed = (money[name1] || 0) / names.length - (money[name2] || 0) / names.length;

          if (amountOwed !== 0) {
            debts[name1][name2] = parseInt(amountOwed.toFixed(2));
          }
        }
      });

      const totalOwedByThisPerson = Object.values(debts[name1]).reduce((acc, val) => {
        if (typeof val === 'number') {
          return acc !== undefined ? acc + val : val;
        } else if (typeof val === 'string') {
          const parsedVal = parseFloat(val);
          if (!isNaN(parsedVal)) {
            return acc !== undefined ? acc + parsedVal : parsedVal;
          }
        }
        return acc;
      }, 0);

      if (totalOwedByThisPerson !== undefined) {
        debts[name1]['total'] = parseInt(totalOwedByThisPerson.toFixed(2));
      }
    });
  }


  return (
    <div className="folderContainer">
      <div className="modalBar">
        <div className="modalBarLeft">
          <Image src={calculator} width={12} height={12} alt="calculator-icon" />
          <p>얼마줘야돼?</p>
        </div>
        <button
          className="close-modal"
          onClick={() => router.back()}
        >
          <Image src={close} width={12} height={12} alt="close-button" />
        </button>
      </div>
      <div className="modal-content">
        {names.length === 0 &&
          <div>
            Enter Names with Commas:
            <input ref={nRef} type='text'></input>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        }
        {names.length !== 0 &&
          <div>
            {names.map((name, i) =>
              <div key={i}>
                {name + ' : ₩'}
                <input type='number' onChange={(e)=>handleMoney(e, name)}></input>
              </div>
            )}
            <button onClick={handleCalculate}>Submit</button>
            <button onClick={() => {setNames([]); setMoney({});}}>Cancel</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Calculator
