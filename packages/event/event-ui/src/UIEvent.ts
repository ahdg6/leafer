import { Event } from '@leafer/event'
import { ILeaf, ILeafList, IUIEvent } from '@leafer/interface'
import { Keyboard } from './Keyboard'
import { PointerButton as B } from './PointerButton'


export class UIEvent extends Event implements IUIEvent {

    readonly x: number
    readonly y: number

    readonly path: ILeafList
    readonly throughPath?: ILeafList

    readonly altKey: boolean
    readonly ctrlKey: boolean
    readonly shiftKey: boolean
    readonly metaKey: boolean
    public get spaceKey(): boolean { return Keyboard.isHoldSpaceKey() }

    public get left(): boolean { return B.left(this) }
    public get right(): boolean { return B.right(this) }
    public get middle(): boolean { return B.middle(this) }
    readonly buttons: number

    readonly target: ILeaf
    readonly current: ILeaf
    readonly bubbles: boolean = true

    constructor(params: IUIEvent) {
        super(params.type)
        Object.assign(this, params)
    }

}