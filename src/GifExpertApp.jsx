import { useState } from'react';
import { AddCategory, GifGrip } from './components';



export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Naruto' ]);
  
  const onAddCategory = ( newCategory) => {

    if( categories.includes(newCategory) ) return;
    


    setCategories( cat => [ newCategory, ...cat  ] )


  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ value => onAddCategory(value) }
        />


      
      {
        categories.map( ( category ) => (
          <GifGrip 
            key={ category }
            category={ category }
            />
        )) 
      }
        
    </>
  )
}

export default GifExpertApp

// mZUBFk3hd6GQHhX0Lby3zj4Hli4UUNhV
// quCZHGkm8bwannj49kBJz5OQMDHtJvZg