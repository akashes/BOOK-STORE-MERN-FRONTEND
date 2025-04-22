import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const [isChecked, setIsChecked] = useState(false)
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2)
  const currentUser = { email: "user@example.com" } // Replace with real user info if available

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = values => {
    console.log('inside onSubmit')
    const newOrder = {
      name: values.name,
      email: currentUser?.email,
      address: {
        city: values.city,
        state: values.state,
        country: values.country,
        zipCode: values.zipcode
      },
      phone: values.phone,
      productIds: cartItems.map(item => item?._id),
      totalPrice: totalPrice
    }
    console.log(newOrder)
  }

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div>
              <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
              <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
              <p className="text-gray-500 mb-6">Items: {cartItems?.length}</p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("name", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        disabled
                        defaultValue={currentUser?.email}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="+123 456 7890"
                        {...register("phone", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("address")}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("city", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / Region</label>
                      <input
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("country", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / Province</label>
                      <input
                        id="state"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("state", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("zipcode", { required: true })}
                      />
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id="billing_same"
                          className="form-checkbox"
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          I agree to the <Link className="underline text-blue-600">Terms & Conditions</Link> and <Link className="underline text-blue-600">Shopping Policy</Link>.
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          disabled={!isChecked}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Place an Order
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage
