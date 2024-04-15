import { useEffect, useState } from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring';

interface IResume {
  title: string;
  value: number;
}

interface NumberAnimationProps {
  value: number;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({ value }) => {
  const [animatedValue, setAnimatedValue] = useState<number>(0);

  // Define a animação usando react-spring
  const { number } = useSpring({
    number: animatedValue,
    from: { number: 0 },
    to: { number: value },
    config: { duration: 1500 } // Ajuste a duração conforme necessário
  });

  // Atualiza o valor animado quando o componente é montado
  useEffect(() => {
    setAnimatedValue(value);
  }, [value]);

  return (
    <animated.span>
      {number.interpolate((val: number) =>
        val.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })
      )}
    </animated.span>
  );
};

function Resume({title, value}: IResume) {
  return (
    <div className="resumesales-content">
      <p>{title}</p>
      <h1><NumberAnimation value={value} /></h1>
    </div>
  )
}

export default Resume;