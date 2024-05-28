import Terminal from '@/components/Terminal/Terminal';
import { folder, linkedin, github, calculator, velog } from '@assets/images';
import { Icon } from '@/components/ui/icon';

export default function Home() {
  const target = '_blank';
  const rel = 'noreferrer noopener';
  const icons = [
    {
      title: 'Projects',
      alt: 'projects-folder',
      src: folder,
      href: '/projects'
    },
    {
      title: 'N빵 계산기',
      alt: 'calculator',
      src: calculator,
      href: '/calculator'
    },
    {
      title: 'Velog',
      alt: 'velog',
      src: velog,
      href: 'https://velog.io/@bieeeee',
      target: target,
      rel: rel
    },
    {
      title: 'LinkedIn',
      alt: 'linkedin',
      src: linkedin,
      href: 'https://www.linkedin.com/in/hanbyeol-kwon/',
      target: target,
      rel: rel
    },
    {
      title: 'Github',
      alt: 'github',
      src: github,
      href: 'https://github.com/bieeeee',
      target: target,
      rel: rel
    },
  ]

  return (
    <div className={"main"}>
      <Terminal />
      {icons.map((icon, i) => (
        <Icon
          key={i}
          title={icon.title}
          alt={icon.alt}
          src={icon.src}
          href={icon.href}
          target={icon.target}
          rel={icon.rel}
        />
      ))}
    </div>
  )
}


