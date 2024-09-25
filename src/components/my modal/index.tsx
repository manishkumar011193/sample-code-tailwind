import * as React from 'react';
import { MyButton } from '../MyButton';
import EditSection from '../edit section';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

export default function ({
  isOpen,
  onClose
}:{
  isOpen: boolean
  onClose: ()=>void
}) {
  const [open, setOpen] = React.useState(false);

  const dataState = useSelector((state: RootState) => state.data);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose()
  }

  React.useEffect(()=>{
    console.log("isopen : ",isOpen)
    setOpen(isOpen)
  },[isOpen])

  if(!isOpen){
    return <></>
  }

  return (
      <>
      <div 
        className="absolute top-0 h-full w-full bg-black/50 border border-black border-solid"
      >

      </div>
      <div 
        className="absolute w-[90%] bg-white border-2 border-black rounded-xl mt-5 place-self-center p-5 z-[999]"
      >
            <EditSection handleClose={handleClose} node={dataState.editNode} />
            <MyButton onClick={handleClose} title='close'/>
            {/* <MyButton onClick={handleClose} title='save'/> */}
      </div>
      </>
  );
}