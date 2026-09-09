
function layout({ children }: { children: React.ReactNode }) {
  return <div>    <div style={{ display: "flex" }}>
      <aside>Dashboard Sidebar</aside>
      <main>{children}</main>
    </div></div>;
}

export default layout;