/**
 * The contact class
 * This is a bean like class
 *
 * It only contains :
 *  - private attributs
 *  - default contructor
 *  - getters and setters
 */
export class Contact {

    private _id: number;
    private _name: string;
    private _address: string;
    private _phone;

    /**
     * Default constructor
     */

    constructor(id: number, name: string, address: string, phone) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phone = phone;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    get phone() {
        return this._phone;
    }


    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set address(value: string) {
        this._address = value;
    }

    set phone(value) {
        this._phone = value;
    }
}
