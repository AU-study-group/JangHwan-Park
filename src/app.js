import { ROOT_PAGE } from "./dom.js";
import { navigation} from "/src/templates/nav/nav.js";
import "./evt.js"; // 이벤트 리스너 모듈 import

ROOT_PAGE.insertAdjacentHTML("beforeend", navigation);