import Card from 'src/components/Atoms/Card'

function DashboardPage() {
  return (
    <div className='w-[1200px] m-auto '>
      <h2>Chọn chức năng</h2>
      <div className='flex flex-wrap mt-[30px]'>
        {Array(8)
          .fill(0)
          .map((item, index) => (
            <Card
              className='text-center rounded-[20px] basis-[30%] w-[30%] m-[5px]'
              key={index + item}
              handleClick={() => console.log('click card' + index)}
            >
              <img
                src='https://demo.sirv.com/nuphar.jpg?w=400'
                alt='img demo'
                className='inline-block w-[150px] mt-[30px] mb-[20px]'
              />
              <p className='mb-[20px]'>Giáo án</p>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default DashboardPage
