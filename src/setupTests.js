import {configure} from 'enzyme'
import Adapter from './hacks/ReactSixteenCustomAdapter'

configure({adapter: new Adapter()});