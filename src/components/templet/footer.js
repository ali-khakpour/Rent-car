const Footer = () => {
  return (
    <footer className="w-full px-5 md:px-16 -translate-y-20 md:-translate-y-0 md:bg-[#ffff] absolute md:mt-7 -botton-0 left-0 flex justify-center items-center z-0">
      <section className="w-full max-w-[1250px]">
        <section className="flex md:justify-between flex-col md:flex-row md:mt-14  ">
          <section className="mt-12 md:m-0 mb-7 w-[250px]">
            <p className=" text-primary font-[700] text-[24px] mb-4">MORENT</p>
            <p className=" text-secondary txet-[12px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </section>

          <section className="flex flex-wrap md:flex-nowrap justify-between mb-12 gap-x-14 gap-y-7">
            <div className=" flex flex-col   ">
              <p className="font-[600] text-[20px] mb-4">About</p>
              <div className=" text-secondary flex flex-col gap-y-3 font-[500] ">
                <p> How it works </p>
                <p> Featured </p>
                <p> Partnership </p>
                <p> Bussiness Relation</p>
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <p className="font-[600] text-[20px] mb-4">Socials</p>
              <div className=" text-secondary flex flex-col gap-y-3 font-[500]">
                <p>Discord </p>
                <p> Instagram</p>
                <p> Twitter </p>
                <p> Facebook</p>
              </div>
            </div>

            <div className="flex flex-col md:items-center  ">
              <p className="font-[600] text-[20px] mb-4">Community</p>
              <div className=" text-secondary flex flex-col gap-y-3 font-[500]">
                <p> Events</p>
                <p> Blog</p>
                <p> Podcast</p>
                <p> Invite a friend</p>
              </div>
            </div>
          </section>
        </section>

        <section className="w-full flex  md:justify-between flex-col md:flex-row-reverse  font-[600] text-[12px] mt-12 mb-8 md:border-t-[1px] border-secondary h-[10px]  md:pt-8 md:text-[16px]  -translate-y-14 md:-translate-y-14">
          <div className="flex gap-x-6 justify-between ">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
          <p className="font-[600]   mt-9 md:mt-0   ">
            ©2022 MORENT. All rights reserved
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
