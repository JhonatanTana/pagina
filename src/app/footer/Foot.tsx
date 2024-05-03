export default function Foot(){

return(
        <div>
            <footer className="bg-black text-white relative z-50 justify-center items-center flex-row col-span-3 gap-3 p-4">
            <ul className="flex flex-row justify-end gap-10 p-4">
                <li className="transition-transform hover:scale-110"><a href="#">Facebook</a></li>
                <li className="transition-transform hover:scale-110"><a href="#">Instagram</a></li>
                <li className="transition-transform hover:scale-110"><a href="#">GitHub</a></li>
            </ul>            
            </footer>
        </div>
    );
}