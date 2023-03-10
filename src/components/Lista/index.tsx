import React, { useState } from 'react';
import style from './Lista.module.scss';

export function Lista() {
	const [tarefas, setTarefas] = useState([
		{
			tarefa: 'React',
			tempo: '02:00:00'
		},
		{
			tarefa: 'Javascript',
			tempo: '01:00:00'
		},
		{
			tarefa: 'Typescript',
			tempo: '03:00:00'
		}
	]);
	return (
		<aside className={style.listaTarefas}>
			<h2
				onClick={() =>
					setTarefas([
						...tarefas,
						{ tarefa: 'Estudar estado', tempo: '05:00:00' }
					])
				}>
				clique teste
			</h2>

			<ul>
				{tarefas.map((item, index) => (
					<li
						key={index}
						className={style.item}>
						<h3>{item.tarefa}</h3>
						<span>{item.tempo}</span>
					</li>
				))}
			</ul>
		</aside>
	);
}
