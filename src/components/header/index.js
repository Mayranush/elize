import React from 'react';
import { Link } from 'react-router/es6';
import './index.scss';

const Index = (...props) => {
  return(
    <nav className="navbar" role="navigation">
      <Link to="">Сопоставление Продукты</Link>
      <Link to="non-compared">Не Сопоставление Продукты</Link>
      <Link to="attached">Прикрепление Продукты</Link>
      <Link to="detached">Открепление Продукты</Link>
      <Link to="export">Экспорт/Статус</Link>
    </nav>
  )  
};

export {Index}