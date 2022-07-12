export default function HamburgerButton(props) {
   return (
      <div
         id="hamburgerBtn"
         className={`${!props.aktif ? "hamburgerActive" : ""}`}
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
}
