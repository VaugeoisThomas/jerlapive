import Header from './components/Header/Header'
import Body from './components/Body/Body'
import WindowTwitch from './components/Body/WindowTwitch'

export default function App () {
  return (
    <>
      <Header />
      <Body>
        <main className="flex flex-col m-3 items-center">
          <WindowTwitch />
          <div className="flex flex-row justify-between gap-5" >
            <div className="flex flex-col">
              <h1 className="mb-5 text-center">A propos de moi</h1>
              <div id="About" className="bg-foreground text-gray-background">
                <p className="p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aut non dolor eligendi temporibus, placeat ipsum eveniet? Quis eos eius repellendus, minus corrupti et praesentium consectetur voluptatum consequatur, nam aut.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-5 text-center">Mes dernieres vidéos</h1>
                <div id="About" className="bg-foreground text-gray-background">
                <p className="p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aut non dolor eligendi temporibus, placeat ipsum eveniet? Quis eos eius repellendus, minus corrupti et praesentium consectetur voluptatum consequatur, nam aut.</p>
              </div>
            </div>
          </div>
        </main>
      </Body>
    </>
  )
}

