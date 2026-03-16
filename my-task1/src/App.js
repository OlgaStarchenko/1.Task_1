import { useState } from "react";
import styles from "./App.module.css";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	function onInputButtonClick() {
		const promptValue = prompt("Введите значение").trim();

		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError("");
		} else {
			setError("Введенное значение должно содержать минимум 3 символа");
			setValue("");
		}
	}

	function onAddButtonClick() {
		if (isValueVaild) {
			let updatedList = [
				...list,
				{
					id: Date.now(),
					value: value,
					date: new Date().toLocaleString("ru-RU", { hour12: false }),
				},
			];
			setList(updatedList);
			setError("");
			setValue("");
			console.log(updatedList);
		}
	}

	let isValueVaild = value.length >= 3;

	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: "
				<output className={styles["current-value"]}>{value}</output>"
			</p>
			{error !== "" ? <div className={styles.error}>{error}</div> : null}
			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles["no-margin-text"]}>
						Нет добавленных элементов
					</p>
				) : (
					<ul className={styles.list}>
						{list.map((li) => (
							<li key={li.id} className={styles["list-item"]}>
								{li.value} {li.date}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default App;
