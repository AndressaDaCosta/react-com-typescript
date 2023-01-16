import React from 'react';
import style from './Botao.module.scss';

export function Botao(children: React.ReactNode) {
	return <button className={style.botao}>{children}</button>;
}
