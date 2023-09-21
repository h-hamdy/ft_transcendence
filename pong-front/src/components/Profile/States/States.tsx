import up from "/src/assets/Up.svg"

interface Props {
	res1: string,
	res2: string,
	res3: string,
	res4: string,
}

export function States ( {res1, res2, res3, res4}: Props ) {
	return (
		<>
			<div className="flex flex-col gap-6 justify-center items-center lg:pl-32">
				<div className="text-[#353E6C] font-bold text-lg p-10 md:p-0 pb-0">States</div>
				<div className="lg:flex lg:flex-row lg:justify-around">

				<div className="md:flex md:flex-row md:gap-6 xl:gap-16 md:pb-5">

				<div className="border w-[200px] h-[100px]  bg-[#F44771] rounded-2xl">
					<div className="state1 h-[100px]">
						<div className="flex flex-col">
							<div className="p-4 text-white font-bold text-md">7 to win match</div>
							<div className="flex gap-[10px]">
								<div>
									<img src={up} className="pl-4"></img>
								</div>
								<div className=" text-white font-semibold text-xl">{res1}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-3 md:pt-0">

				<div className="border w-[200px] h-[100px]  bg-[#FF9A3E] rounded-2xl">
					<div className="state2 h-[98px]">
						<div className="flex flex-col">
							<div className="p-4 text-white font-bold text-md">3 to win match</div>
							<div className="flex gap-[10px]">
								<div>
									<img src={up} className="pl-4"></img>
								</div>
								<div className=" text-white font-semibold text-xl">{res2}</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				</div>

				<div className="pt-3 md:pt-0 lg:pl-5 lg:pr-5 xl:pl-[64px]">
				<div className="md:flex md:flex-row md:gap-6 xl:gap-16">
				<div className="border w-[200px] h-[100px]  bg-[#7F77C5] rounded-2xl">
					<div className="state3 h-[100px]">
						<div className="flex flex-col">
							<div className="p-4 text-white font-bold text-md">5 to win match</div>
							<div className="flex gap-[10px]">
								<div>
									<img src={up} className="pl-4"></img>
								</div>
								<div className=" text-white font-semibold text-xl">{res3}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-3 md:pt-0">

				<div className="border w-[200px] h-[100px]  bg-[#00AD83] rounded-2xl">
					<div className="state4 h-[100px]">
						<div className="flex flex-col">
							<div className="p-4 text-white font-bold text-md">1 to win match</div>
							<div className="flex gap-[10px]">
								<div>
									<img src={up} className="pl-4"></img>
								</div>
								<div className=" text-white font-semibold text-xl">{res4}</div>
							</div>
						</div>
					</div>
				</div>
				</div>

				</div>
				</div>
				</div>
			</div>
		</>
	)
}
