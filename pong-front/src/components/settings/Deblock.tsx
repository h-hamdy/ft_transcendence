interface Props {
	name: string,
}

export function Deblock ( { name }: Props ) {
	return (
		<>
			<div className="flex items-center justify-around w-[120px] h-[40px] bg-gray-100 rounded-md">
				<div className="text-sm text-[#5961F9]">{name}</div>
				<button>
					<div className="text-lg font-semibold text-[#ff0000]">X</div>
				</button>
			</div>
		</>
	)
}