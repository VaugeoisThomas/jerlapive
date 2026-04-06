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
                <p className="p-2">
                  Streamer de 39 ans, je suis amoureux des jeux vidéos depuis que je suis petit.<br/>
                  Je suis un joueur de pas mal de style de jeux vidéo, même si je reste accro aux jeux d&#39;horreur.<br />
                  Principalement je joue à Phasmophobia, mais je joue à toute sorte de jeux, comme Ghost Janitor, Subliminal ...<br />
                  N&#39;hésitez pas à venir nous rejoindre en direct sur <a href="https://www.twitch.tv/jerlapive"> Twitch</a>
                </p>
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

