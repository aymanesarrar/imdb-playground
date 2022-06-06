import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { modal } from './states';

interface Props {
  children: React.ReactNode;
}
export const Modal = ({children}: Props) => {
	const modbg = useRecoilValue(modal);
	return <div className={modal ? "min-h-full flex items-center justify-center" : "hidden"}>
		{children}
	</div>
}