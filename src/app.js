import { ROOT_PAGE } from "./dom.js";
import { navigation} from "/src/templates/nav/nav.js";
import { FOOTER_HTML} from "/src/templates/footer.js";
import "./evt.js"; // 이벤트 리스너 모듈 import

const addElement = (element, position, html) => {
    element.insertAdjacentHTML(position, html);
}

addElement(ROOT_PAGE, "beforeend", navigation);
addElement(ROOT_PAGE, 'beforeend', FOOTER_HTML);