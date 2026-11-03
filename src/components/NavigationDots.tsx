
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'services', 'portfolio', 'about', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#000000' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
