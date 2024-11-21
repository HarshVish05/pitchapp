import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { FiSearch } from 'react-icons/fi'

const SearchForm = ({query}) => {
  // const searchQuery = 'test'
  
   return (
    <Form action='/' scroll={false} className='search-form'>
      <input placeholder='Search Startups' name="query" defaultValue={query} className='search-input' />
      <div className="flex gap-2">
          { query && <SearchFormReset /> }
          <button type="submit" className='text-white search-btn'><FiSearch /></button>
      </div>
    </Form>
  )
}

export default SearchForm