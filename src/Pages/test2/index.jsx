export const Test2 = () => {
  return (
    <>
      <body className="text-gray-600">
        <div>
          <div>
            <nav>
              <div>
                <a href="/">Food Ninja</a>
              </div>
              <ul>
                <li className="text-gray-700">
                  <a href="#">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <main>
            <div>
              <a href="#">Login</a>
              <a href="#">Signup</a>
            </div>
            <header>
              <h2 className="text-gray-700 text-6xl">Recipes</h2>
              <h3 className="text-2xl">For Ninjas</h3>
            </header>

            <div>
              <h4>Lastest Recipes</h4>

              <div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <span>5 Bean Chilli Stew</span>
                    <span>Recipe by Mario</span>
                  </div>
                </div>
              </div>

              <h4>Most popular</h4>

              <div>{/* Cards */}</div>

              <div>
                <div>Load more</div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};
