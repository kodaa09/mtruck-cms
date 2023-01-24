"use client";

export default function Header({ children }: any) {
  function onOpenBurger() {
    console.log("jopen");
    // return <div>burger apparait</div>;
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        {children}
        <div className="header-burger-container">
          <button className="header-burger" onClick={onOpenBurger}>
            <i></i>
            <i></i>
            <span className="hide-access">Ouvrir le menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
