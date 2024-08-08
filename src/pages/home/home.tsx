import { Button, Input, Table } from '@mantine/core';
import style from "./index.module.css"
import Mainmodal from '../../components/MainModal/Mainmodal';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { readData } from '../../firebase/firebase';
// import "@mantine/core/styles.css"

interface DataItem {
  ourCode:string;
  productDesc: string;
  oemNumber: string;
  gtip: string;
  marka: string;
  origin: string;
  qty: number;
  price: number;
  total: number;
}


function App() {

  const currentDate = new Date().toDateString()

  const [data, setData] = useState<DataItem[]>([])
  
  const [modalOpen, setmodalOpen] = useState<boolean>(false);

  const toggleModal = () => setmodalOpen(!modalOpen)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readData('Data');
        setData(result || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const res = Object.values(data)

  console.log(res);
  
  
  
  
  // elements.map((element) => (
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
      
      <Mainmodal isOpen={modalOpen} onClose={toggleModal}/>
      <div className={style.section2}>
         <div className={style.maintitle}>
         <RxHamburgerMenu className={style.ham} onClick={toggleModal} />
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
        <Table.Th>Our Code</Table.Th>
          <Table.Th>Product Desc</Table.Th>
          <Table.Th>Oem Number</Table.Th>
          <Table.Th>Gtip</Table.Th>
          <Table.Th>Marka</Table.Th>
          <Table.Th>Origin</Table.Th>
          <Table.Th>QTY</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
      {res?.map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{item.ourCode}</Table.Td>
                  <Table.Td>{item.productDesc}</Table.Td>
                  <Table.Td>{item.oemNumber}</Table.Td>
                  <Table.Td>{item.gtip}</Table.Td>
                  <Table.Td>{item.marka}</Table.Td>
                  <Table.Td>{item.origin}</Table.Td>
                  <Table.Td>{item.qty}</Table.Td>
                  <Table.Td>{item.price}</Table.Td>
                  <Table.Td>{item.total}</Table.Td>
                </Table.Tr>
              ))}

      </Table.Tbody>
    </Table>
  
        </div>
      </div>
    </div>
    </>
  )
}

export default App
