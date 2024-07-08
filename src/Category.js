export default function Category(props) {
  const {categoryTitle, works} = props.category;
  return (
    <div className="Category" style={{border: '1px solid red'}}>
      <h4>{categoryTitle}</h4>
      <div>
        {
          works.map((work) => {
            return (
              <a href={work.link} rel="noreferrer" target="_blank">
                <h6>{`${work.workTitle} (${work.source}, ${work.year})`}</h6>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}