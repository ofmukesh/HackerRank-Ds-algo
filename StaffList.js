class StaffList {
    constructor() {
        this.l = 0;
        this.arr = []
    }
    add(user, age) {
        if (age <= 20) {
            throw Error("Staff member age must be greater than 20")
        } else {
            this.l = this.l + 1;
            this.arr.push(user)
        }
    }
    remove(data) {
        if (this.arr.includes(data)) {
            this.l = this.l - 1;
            this.arr.splice(this.arr.indexOf(data))
            return true;
        } else {
            return false;
        }
    }
    getSize() {
        return this.l
    }
}
