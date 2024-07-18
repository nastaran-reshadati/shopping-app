import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-orange-200 dark:bg-orange-300 h-auto my-16 rounded-t-3xl">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <Image
          src={"/images/pizza.png"}
          width={440}
          height={0}
          objectFit="contain"
          alt="pizza image"
          style={{ height: "auto" }}
        />
        <div className="font-DanaMedium leading-8 text-lg text-black ">
          فست فود ما در تهران، منطقه حقانی، از سال 1390 فعالیت خود را آغاز کرده
          است. با داشتن فضای جذاب و دلنشین، این مکان به یکی از محبوب‌ترین مقاصد
          برای برگزاری تولدها و مراسمات خاص تبدیل شده است. از ابتدا تا کنون، هدف
          ما ارائه غذاهای با کیفیت و تجربه‌ای لذت‌بخش برای مشتریان بوده است. تیم
          حرفه‌ای و متعهد ما با استفاده از مواد اولیه تازه و روش‌های پخت مدرن،
          بهترین طعم‌ها را به شما ارائه می‌دهند. افتخار ما میزبانی از شما در
          فضایی گرم و صمیمی است، جایی که هر لحظه‌اش خاطره‌انگیز خواهد بود.
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
