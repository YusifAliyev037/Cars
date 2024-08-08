import Mainmodal from '../../components/MainModal/Mainmodal'
import { Button, Input, Table } from '@mantine/core';
import style from "./index.module.css"

function search() {

  // const rows = elements.map((element) => (
  //   <Table.Tr key={element.name}>
  //     <Table.Td>{element.position}</Table.Td>
  //     <Table.Td>{element.name}</Table.Td>
  //     <Table.Td>{element.symbol}</Table.Td>
  //     <Table.Td>{element.mass}</Table.Td>
  //   </Table.Tr>
  // ));

  return (
    <div className={style.content}>
      <Mainmodal/>
      <div >
        <div className={style.input}>

      <Input size="md" placeholder="Ehtiyyat hissəsini yaz" />
      <Button
      className={style.button}
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
      Axtar
    </Button>
      </div>

        <div>
      <Table>
      <Table.Thead>
        <Table.Tr>
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
        {/* {rows} */}
        </Table.Tbody>
    </Table>
    </div>
      </div>
    </div>
  )
}

export default search