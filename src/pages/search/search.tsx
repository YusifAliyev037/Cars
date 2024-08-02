import React from 'react'
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
  )
}

export default search