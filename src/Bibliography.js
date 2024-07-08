import categories from './categories';
import Category from './Category';
export default function Bibliography() {
  return (
    <div className="Bibliography" style={{border: '1px solid green'}}>
      <h3>This is the bibliography component. You can tell it's distinct from the rest of the webpage because it's bordered in green.</h3>
      <p>The bibliography component is going to be comprised of several smaller Category components, bordered in red. </p>
      <p>They will each take a different array of values and represent the different media categories to display. </p>
      <p>Since the different arrays are all fed into one component type, it will render them all in a similar way. This makes it easier to tweak global styles, as well as edit individual values.</p>
      <p>Probably.</p>
      <div className="categories-container">
        {
          categories.map((category) => {
            return (
              <Category category={category} />
            )
          })
          
        }
      </div>
    </div>
  )
}