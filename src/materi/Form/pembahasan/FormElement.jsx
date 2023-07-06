import React from "react";

export default class FormElement extends React.Component {
    state = {
        username: '',
        gender: '',
        jurusan: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        username: ${this.state.username},
        gender: ${this.state.gender},
        jurusan: ${this.state.jurusan},
        alamat: ${this.state.alamat},
        member: ${this.state.member ? 'YES' : 'NO'},
        `);
        this.setState({
            username: '',
            gender: '',
            jurusan: '',
            alamat: '',
            member: false
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form">
                    <label htmlFor="userName">Nama: </label>
                    <input type="text" name="username" id="userName" defaultValue={this.props.username} onChange={e => this.setState({ username: e.target.value }, () => console.log(this.state))} />
                </div>
                <div className="form">
                    <label htmlFor="Gender">Jenis Kelamin: </label>
                    <input id="Gender" name="gender" type="radio" value={"Laki-Laki"} onChange={e => this.setState({ gender: e.target.value }, () => console.log(this.state))} />Laki-Laki
                    <input id="Gender" name="gender" type="radio" value={"Perempuan"} onChange={e => this.setState({ gender: e.target.value }, () => console.log(this.state))} />Perempuan
                </div>
                <div className="form">
                    <label htmlFor="Jurusan">Jurusan: </label>
                    <select id="Jurusan" name="jurusan" onChange={e => this.setState({ jurusan: e.target.value }, () => console.log(this.state))} >
                        <option>--Pilih Jurusan--</option>
                        <option>Aqidah Filsafat Islam</option>
                        <option>Ilmu Alquran dan Tafsir</option>
                        <option>Tasawuf dan Psikoterapi</option>
                        <option>Ilmu Hadis</option>
                        <option>Pendidikan Agama Islam</option>
                        <option>Manajemen Bisnis Syariah</option>
                    </select>
                </div>
                <div className="form">
                    <label htmlFor="Alamat">Alamat: </label>
                    <textarea name="alamat" id="Alamat" cols="30" rows="10" onChange={e => this.setState({ alamat: e.target.value }, () => console.log(this.state))} />
                </div>
                <div className="form">
                    <label htmlFor="Member">Member</label>
                    <input name="member" id="Member" type="checkbox" checked={this.state.member} onChange={e => this.setState({ member: e.target.checked }, () => console.log(this.state))} />
                </div>
                <div className="form">
                    <button type="submit" >Submit</button>
                </div>
            </form>
        )
    }
}