import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <>
      {/* <div className='grid grid-cols-10 gap-3'>
        <div className='bg-red-500 col-span-5'>Hi from first div</div>
        <div className='bg-green-500 col-span-3'>Hi from second div</div>
        <div className='bg-blue-500 col-span-2'>Hi from third div</div>
      </div> */}
      {/* <div className='bg-red-500 md:bg-green-500'>Hi there from div!!</div> */}
      {/* <div className='flex flex-col md:flex-row'>
        <div className='bg-red-500 md:bg-green-500 flex-1'>Hi from first div</div>
        <div className='bg-blue-500 md:bg-yellow-500 flex-1'>Hi from second div</div>
        <div className='bg-green-500 md:bg-red-500 flex-1'>Hi from third div</div>
      </div> */}
      <div className='grid grid-cols-4 gap-3'>
        <RevenueCard title='Amount Pending' displayHintIcon={true} amount='₹ 92,000' orderCount={13} />
      </div>
    </>
  )
}

export default App
