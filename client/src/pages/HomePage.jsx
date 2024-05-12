import { useState, useEffect } from "react";
import { Container, Button, Stack, FormControl, FormLabel, Input, useToast, Center, Text } from "@chakra-ui/react";
import BookList from "../components/BookList"
import axios from 'axios';
import { fetchBookList, createBookList } from '../redux/book/bookActions';
import { fetchCount } from '../redux/count/countActions';
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {

  // REDUX
  const dispatch = useDispatch();
  const { count, isCountLoading } = useSelector((state) => state.count);
  const { isAddBtnLoading, message } = useSelector((state) => state.book);

  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [isListUpdated, setIsListUpdated] = useState(false);

  const toast = useToast();

  useEffect(() => {
    dispatch(fetchBookList());
    dispatch(fetchCount());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast({
        title: 'Book created successfully.',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })  
    }
  }, [message])

  const handleSubmit = async() => {
    if (!bookName || !description) {
      toast({
        title: 'Please fill all fields.',
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
    } else {
      let payload = {
        bookName: bookName,
        description: description
      };
      dispatch(createBookList(payload));
      resetForm();
    }
  };

  const resetForm = () => {
    setBookName('');
    setDescription('');
  };

  return (
    <Container maxW='3xl' mt={50}>
      <Center mt={50}>
        <Text fontSize='3xl'>{`Count: ${count?.count ?? 0}`}</Text>
      </Center>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel>Book Name</FormLabel>
          <Input size='lg' type='text' placeholder='Enter Book Name' value={bookName} onChange={(e) => setBookName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input size='lg' type='text' placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </FormControl>
        <Button w='150px' h='40px' colorScheme='blue' isLoading={isAddBtnLoading} loadingText='Adding' onClick={handleSubmit} >Add</Button>
      </Stack>

      {/*   List components  */}
      <BookList />
    </Container>
  );
};

export default HomePage;
