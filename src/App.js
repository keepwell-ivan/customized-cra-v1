import Toggle from 'components/Toggle'

function App() {
	return (
		<div className="p-4">
			<h1 className="text-5xl mb-4">Components</h1>
			<div>
				<h3 className="font-semibold mb-2">Switch Toggle</h3>
				<div className="border w-[40%] p-4 rounded">
					<Toggle />
				</div>
			</div>
		</div>
	)
}

export default App
