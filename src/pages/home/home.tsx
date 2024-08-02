import { Button, Input, Table } from '@mantine/core';
import style from "./index.module.css"
import Mainmodal from '../../components/MainModal/Mainmodal';
// import "@mantine/core/styles.css"




function App() {

  const currentDate = new Date().toDateString()
  

  // const rows = elements.map((element) => (
  //   <Table.Tr key={element.name}>
  //     <Table.Td>{element.position}</Table.Td>
  //     <Table.Td>{element.name}</Table.Td>
  //     <Table.Td>{element.symbol}</Table.Td>
  //     <Table.Td>{element.mass}</Table.Td>
  //   </Table.Tr>
  // ));

  

  return (
    <>
    <div className={style.content}>
      <Mainmodal/>
      <div className={style.section2}>
         <div className={style.maintitle}>
          <h2>Bugünün Statistikası</h2>
          <p>{currentDate}</p>
         </div>
         <div className={style.card}>
          <div className={style.title}>
            <h4>Gəlir</h4>
            <p className={style.subtitle}>Bugün</p>
          </div>
          <hr style={{color:"gray"}} />
          <div className={style.price}>
            <h1>$9400</h1>
            <p >1.5%</p>   {/* color red and green */}
          </div>
          <div>
            <p>Dünən olan gəlir:123$</p>
            <h4>Keçən həftənin gəliri:1232$</h4>
          </div>
         
         </div>
         <div className={style.card}>
          <div className={style.title}>
            <h4>Xərc</h4>
            <p className={style.subtitle}>Bugün</p>
          </div>
          <hr style={{color:"gray"}} />
          <div className='price'>
            <h1>$9400</h1>
            <p >1.5%</p>   {/* color red and green */}
          </div>
          <div>
            <p>Dünən olan xərc:123$</p>
            <h4>Keçən həftənin xərc:1232$</h4>
          </div>
         
         </div>

      </div>
      <div className={style.section3}>
        <div className={style.input}>
        <Input variant="unstyled" className={style.search} style={{margin:"20px"}} placeholder="Input component" />
        <Button
      className={style.button}
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      Axtar
    </Button>
        </div>
        <div className={style.lastadds}>
        <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {/* {rows} */}

      </Table.Tbody>
    </Table>
  
        </div>
      </div>
    </div>
    </>
  )
}

export default App
