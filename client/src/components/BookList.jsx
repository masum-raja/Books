import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  IconButton
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from '@chakra-ui/icons';
import { updateBookList } from '../redux/book/bookActions';
import { fetchBookList } from '../redux/book/bookActions';
import { fetchCount } from '../redux/count/countActions';

const BookList = () => {
  const [editableIndex, setEditableIndex] = useState(-1);
  const [updatedValues, setUpdatedValues] = useState({ bookName: '', description: '' });

  // REDUX
  const dispatch = useDispatch();
  const { bookList, isLoading, isUpdateBtnLoading } = useSelector((state) => state.book);

  const handleUpdate = (index) => {
    setEditableIndex(index);
    const { bookName, description } = bookList[index];
    setUpdatedValues({ bookName, description });
  };

  const handleSave = (uuid) => {
    dispatch(updateBookList({ uuid, data: updatedValues }));
    resetForm();
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setUpdatedValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const resetForm = () => {
    setEditableIndex(-1);
    setUpdatedValues({ bookName: '', description: '' });;
  };

  return (
    <TableContainer mt="12" border='1px solid #CBD5E0' maxHeight="500px" overflowY="auto" position="relative">
      <Table size='lg'>
        <Thead bg="white" position="sticky" top="0" zIndex="sticky">
          <Tr>
            <Th>Book Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookList && bookList.map((item, index) => (
            <Tr key={index}>
              <Td maxW="150px" whiteSpace="normal" overflowWrap="break-word">
                {editableIndex === index ? (
                  <Input value={updatedValues.bookName} onChange={(e) => handleInputChange(e, 'bookName')} />
                ) : (
                  item.bookName
                )}
              </Td>
              <Td maxW="150px" whiteSpace="normal" overflowWrap="break-word">
                {editableIndex === index ? (
                  <Input value={updatedValues.description} onChange={(e) => handleInputChange(e, 'description')} />
                ) : (
                  item.description
                )}
              </Td>
              <Td maxW="150px">
                {editableIndex === index ? (
                  <>
                    <Button isLoading={isUpdateBtnLoading} loadingText='Saving' onClick={() => handleSave(item.uuid)} mr="3">Save</Button>
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={() => {
                        setEditableIndex(-1);
                        setUpdatedValues({ bookName: '', description: '' });
                      }}
                    />
                  </>
                  ) : (
                  <Button onClick={() => handleUpdate(index)}>Update</Button>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BookList;
