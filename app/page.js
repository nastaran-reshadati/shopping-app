import AboutUs from "@/components/aboutUs/page";
import Card from "@/components/card/page";
import Contacts from "@/components/contactUs/page";
import Hero from "@/components/hero/page";
import ProductsTab from "@/components/products/productsTab/page";
import Tab from "@/components/products/tab/page";

export default async function Home() {
  return (
    <>
      <Hero />
      <Card />
      <Tab />
      <AboutUs />
      <Contacts />
      {/* <ProductsTab /> */}
    </>
  );
}
