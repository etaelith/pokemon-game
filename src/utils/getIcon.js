import grassIcon from "@assets/type-icons/grass.svg";
import poisonIcon from "@assets/type-icons/poison.svg";
import bugIcon from "@assets/type-icons/bug.svg";
import darkIcon from "@assets/type-icons/dark.svg";
import dragonIcon from "@assets/type-icons/dragon.svg";
import electricIcon from "@assets/type-icons/electric.svg";
import fairyIcon from "@assets/type-icons/fairy.svg";
import fightingIcon from "@assets/type-icons/fighting.svg";
import fireIcon from "@assets/type-icons/fire.svg";
import ghostIcon from "@assets/type-icons/ghost.svg";
import groundIcon from "@assets/type-icons/ground.svg";
import iceIcon from "@assets/type-icons/ice.svg";
import psychicIcon from "@assets/type-icons/psychic.svg";
import rockIcon from "@assets/type-icons/rock.svg";
import steelIcon from "@assets/type-icons/steel.svg";
import waterIcon from "@assets/type-icons/water.svg";
import normalIcon from "@assets/type-icons/normal.svg";
import flyingIcon from "@assets/type-icons/flying.svg";
export default function defineIcon(type) {
  switch (type) {
    case "grass":
      return grassIcon;
      break;
    case "water":
      return waterIcon;
      break;

    case "electric":
      return electricIcon;
      break;

    case "ground":
      return groundIcon;
      break;

    case "rock":
      return rockIcon;
      break;

    case "fire":
      return fireIcon;
      break;

    case "fairy":
      return fairyIcon;
      break;

    case "fighting":
      return fightingIcon;
      break;

    case "flying":
      return flyingIcon;
      break;

    case "dragon":
      return dragonIcon;
      break;

    case "dark":
      return darkIcon;
      break;

    case "ice":
      return iceIcon;
      break;

    case "psychic":
      return psychicIcon;
      break;

    case "poison":
      return poisonIcon;
      break;

    case "steel":
      return steelIcon;
      break;

    case "bug":
      return bugIcon;
      break;

    case "ghost":
      return ghostIcon;
      break;

    case "normal":
      return normalIcon;
      break;

    default:
      return normalIcon;
      break;
  }
}
