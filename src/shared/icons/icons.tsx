export interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
}

export const Home = ({ height, width, className }: IIconProps) => {
	return (
		<svg width={width || '20'} height={height || '20'} className={className || ''} viewBox='0 0 17 17' fill='none'>
			<path d='M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z' />
		</svg>
	);
};
