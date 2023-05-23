import { StatusBarContainer } from './styles';

export default function StatusBar ({status, type}){
  return (
    <StatusBarContainer status={status} type={type}>
        <div className='bar'>
            {status}
        </div>
    </StatusBarContainer>
  )
}

