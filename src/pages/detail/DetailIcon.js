import { useState } from 'react';
import styled from 'styled-components';

const DetailIcon = () => {
  const colorChange = 1;
  const [count, setCount] = useState([0, 0, 0, 0]);
  const changeCount = (e) => {
    let copyArray = [...count];
    for (let i = 0; i < copyArray.length; i++) {
      copyArray[i] = 0;
    }
    copyArray[e.currentTarget.id] === 0 ? (copyArray[e.currentTarget.id] += 1) : (copyArray[e.currentTarget.id] -= 1);
    setCount(copyArray);
  };

  return (
    <IconWrap>
      {icon.map((item, idx) => {
        return (
          <IconBox key={idx} id={idx} className={colorChange === count[idx] ? 'isActive' : ''} onClick={changeCount}>
            <div className='icon-img'>{item.icon}</div>
            <div className='icon-text'>{item.text}</div>
            <div className='icon-count'>{count[idx]}</div>
          </IconBox>
        );
      })}
    </IconWrap>
  );
};

const icon = [
  {
    id: 1,
    icon: <>π</>,
    text: 'λ§μλ€μ΄μ',
  },
  {
    id: 2,
    icon: <>π</>,
    text: 'μ¬μΏ΅νμ΄μ',
  },
  {
    id: 3,
    icon: <>π</>,
    text: 'μμν΄μ',
  },
  {
    id: 4,
    icon: <>π€£</>,
    text: 'κ°κ³ μΆμ΄μ',
  },
];

const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
  margin-top: 80px;

  .isActive {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: 500;
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayText};

  .icon-img {
    font-size: 51px;
    margin-bottom: 8px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    .icon-img {
      font-size: 8vw;
    }
  }
  .icon-text {
    font-size: 12px;
  }

  .icon-count {
    font-size: 10px;
    line-height: 14px;
  }
`;
export default DetailIcon;
