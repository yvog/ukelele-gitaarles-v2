import iconBook from '../../../public/images/icon/icon_book.svg';
import iconBox from '../../../public/images/icon/icon_box.svg';
import iconCamera from '../../../public/images/icon/icon_camera.svg';
import iconGrandma from '../../../public/images/icon/icon_grandma.svg';
import iconGuitar from '../../../public/images/icon/icon_guitar.svg';
import iconHeart from '../../../public/images/icon/icon_heart.svg';
import iconHome from '../../../public/images/icon/icon_home.svg';
import iconHouse from '../../../public/images/icon/icon_house.svg';
import iconInvoice from '../../../public/images/icon/icon_invoice.svg';
import iconKnowledge from '../../../public/images/icon/icon_knowledge.svg';
import iconMan from '../../../public/images/icon/icon_man.svg';
import iconMetronome from '../../../public/images/icon/icon_metronome.svg';
import iconPiano from '../../../public/images/icon/icon_piano.svg';
import iconPreknowledge from '../../../public/images/icon/icon_preknowledge.svg';
import iconWrench from '../../../public/images/icon/icon_wrench.svg';
import { Icon } from '../../gql/graphql';

export const icons: Record<Icon, string> = {
  [Icon.Piano]: iconPiano,
  [Icon.Guitar]: iconGuitar,
  [Icon.Wrench]: iconWrench,
  [Icon.Home]: iconHome,
  [Icon.Knowledge]: iconKnowledge,
  [Icon.Metronome]: iconMetronome,
  [Icon.Heart]: iconHeart,
  [Icon.House]: iconHouse,
  [Icon.Grandma]: iconGrandma,
  [Icon.Invoice]: iconInvoice,
  [Icon.Camera]: iconCamera,
  [Icon.Man]: iconMan,
  [Icon.Preknowledge]: iconPreknowledge,
  [Icon.Book]: iconBook,
  [Icon.Box]: iconBox,
};
