import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "./reducer"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate, useParams } from "react-router-dom"
import { fetchDetailUser } from "../UserDetail/reducer"
import { useEffect } from "react"

export default function UpdateUser() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = useSelector((state)=>state.adminDetailUserReducer);

  useEffect(()=>{
    dispatch(fetchDetailUser(id));
  }, []);

  const formik = useFormik({
    initialValues: {
        // taiKhoan: `${props.data.taiKhoan}`,
        // matKhau: `${props.data.matKhau}`,
        // email: `${props.data.email}`,
        // soDt: `${props.data.soDt}`,
        // maNhom: `${props.data.maNhom}`,
        // maLoaiNguoiDung: `${props.data.maLoaiNguoiDung}`,
        // hoTen: `${props.data.hoTen}`,
        taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP03",
            maLoaiNguoiDung: "",
            hoTen: ""
    },
    validationSchema: Yup.object({
        taiKhoan: Yup.string()
           .required("Tài khoản không được để trống"),
        matKhau: Yup.string()
           .required("Mật khẩu không được để trống")
           .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
        email: Yup.string()
           .required("Email không được để trống")
           .email("Email không đúng định dạng"),
        soDt: Yup.string()
           .required("Số điện thoại không được để trống"),
        hoTen: Yup.string()
           .required("Họ tên không được để trống")
    }),
    onSubmit: (values) => {
        dispatch(updateUser(values));
        navigate("/admin/list-user");
    }
})
    useEffect(()=>{
        if(props.data){
            formik.setValues({
                taiKhoan: props.data.taiKhoan,
                matKhau: props.data.matKhau,
                email: props.data.email,
                soDt: props.data.soDt,
                maNhom: props.data.maNhom,
                maLoaiNguoiDung: props.data.maLoaiNguoiDung,
                hoTen: props.data.hoTen
            })
        }
    }, [props.data])

  return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 md:p-5 space-y-4">
                    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                        <input type="text" name="hoTen"
                        value={formik.values.hoTen}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {formik.touched.hoTen && formik.errors.hoTen && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{formik.errors.hoTen}</span>
                        </div>
                        )}
                    </div>    
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tài khoản</label>
                        <input type="text" name="taiKhoan"
                        value={formik.values.taiKhoan}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{formik.errors.taiKhoan}</span>
                        </div>
                        )}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                        <input type="password" name="matKhau" 
                        value={formik.values.matKhau}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {formik.touched.matKhau && formik.errors.matKhau && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{formik.errors.matKhau}</span>
                        </div>
                        )}
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {formik.touched.email && formik.errors.email && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{formik.errors.email}</span>
                        </div>
                        )}
                    </div>
                    <div className="mb-5">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                        <input type="number" name="soDt"
                        value={formik.values.soDt}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        {formik.touched.soDt && formik.errors.soDt && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{formik.errors.soDt}</span>
                        </div>
                        )}
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã loại người dùng</label>
                        <select name="maLoaiNguoiDung"
                        value={formik.values.maLoaiNguoiDung}
                        onChange={formik.handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Chọn loại người dùng</option>
                            <option value="KhachHang">Khách hàng</option>
                            <option value="QuanTri">Quản trị</option>
                        </select>
                    </div>
                <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>
                    </form>
                </div>
    </div>
  )
}
