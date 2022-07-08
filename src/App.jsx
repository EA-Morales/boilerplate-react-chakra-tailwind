import { useState } from "react";
import { Button } from "@chakra-ui/react";

import logo from "./logo.svg";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<header className='App-header'>
				<img alt='logo' className='App-logo' src={logo} />
				<p className='text-5xl text-red-700'>Hello Vite + React!</p>
				<p>
					<Button
						colorScheme='blue'
						type='button'
						onClick={() => setCount(count => count + 1)}>
						count is: {count}
					</Button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className='App-link'
						href='https://reactjs.org'
						rel='noopener noreferrer'
						target='_blank'>
						Learn React
					</a>
					{" | "}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						rel='noopener noreferrer'
						target='_blank'>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
