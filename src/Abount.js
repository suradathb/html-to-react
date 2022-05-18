import React, { Component } from "react";
import "./Abount.css";

// function Abount() {
class Abount extends Component {
  render() {
    // console.log(this.props)
    return (
      <>
        <section className="bg-success py-5">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-md-8 text-white">
                <h1>NFT CowCert</h1>
                <p>
                  ระบบ NFT CowCert ถูกพัฒนาขึ้นเพื่อเป็นต้นแบบ
                  สำหรับงานวิจัยเพื่อแสดงให้เห็นกระบวนการทำงาน
                  จึงทำขึ้นเพื่อเป็นเว็บตัวแทนของสมาคม เมื่อพวกเค้าเชื่อถือ
                  blockchain ร่วมกันเหล่าสมาชิก ผู้สนใจ และผู้ดูแลระบบ
                  สามารถใช้งานผ่าน ระบบ NFT CowCert ตามสิทธิ์การเข้าถึงในแต่ละ
                  หน้าที่ของการใช้งานของพวกเค้าได้ผ่านระบบต้นแบบนี้ Smart
                  contract ถูก Deploy ขึ้นใน วง chain ของ binance testnet และใช้
                  fleek ในการจัดการกับ Server
                  เหล่านี้คือข้อมูลเบื่องต้นและยินดีต้องรับสู่{" "}
                  <b>NFT CowCert</b> ระบบ NFT สำหรับ ตรวจสอบ
                  และเปลี่ยนมือตัวแทนของ โคบราห์มัน แบบ Decentralization
                </p>
              </div>
              <div className="col-md-4">
                <img src="../assets/images/NFTWrite.png" alt="About Hero" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Start Section --> */}
        <section class="container py-5">
          <div class="row  pt-5 pb-3">
            <div class="col-lg-12 m-auto">
              <h1 class="h1">NFT CowCert </h1>
              <h5>SECTION I. Introduction </h5>
              <p>
                cd &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Non-fungible Token (NFT)
                ถูกปรับใช้งานหลายหลายมากขึ้นในยุคของบล็อกเชน 3.0 ในยุคของ DApps
                มีการปรับใช้ NFT สำหรับงานด้าน Certificate
                มากขึ้นในลักษณะของการสร้าง Token เฉพาะและโอนให้ในกระเป๋า wallet
                ของผู้ร้องขอ เพื่อมอบเป็นเอกสารดิจิทัลที่ไม่เหมือนใคร
                และสามารถตรวจสอบได้ ใบรับรองในรูปแบบ NFT
                ได้นำความสะดวกมากมายในการออกและรับรองความถูกต้อง
                ในระบบการศึกษาจำนวนมากได้แนะนำเทคโนโลยีที่เกี่ยวข้องกับบล็อกเชนในสถานการณ์ของการรับรองการจัดการใบรับรอง
                แต่การวิจัยใน NFT นั้นเป็นลักษณะของการออกและมอบให้
                การโอนหรือการเปลี่ยนมือผู้ถือครองนั้นยังไม่ได้ถูกออกแบบให้สามารถใช้ร่วมกันในระบบเดียวได้
                และยังอยู่ในช่วงเริ่มต้น
                ปัจจุบันปัญหาในการถูกโจมตีส่วนใหญ่ในบล็อกเชนเกิดจากปัญหาภายนอกของบล็อกเชน
                เช่น
                มีการบันทึกข้อมูลเข้าสู่ดาต้าเบสแบบปกติและบางส่วนบันทึกลงบล็อกเชนทำให้เกิดช่องโหว่ที่ดาต้าเบสปกติ
                ถึงแม้ว่าการปรับใช้บล็อกเชนในลักษณะนี้จะช่วยแก้ไขปัญหาการทำให้โหนดบวมอันเกิดจากการบันทึกข้อมูลที่มากเกินไป
                และลดค่าใช้จ่าย gas ลงได้ [16]
                ปัญหาข้างต้นนี้ทำให้ผู้ผลิตจะต้องมาออกแบบเรื่องความปลอดภัยแยกจากบล็อกเชนอีกด้วย
                นั้นทำให้ค่าใช้จ่ายเพิ่มขึ้น แม้ว่า NFT
                ในการจัดการใบรับรองจะมีประโยชน์มากมาย แต่แนวทาง NFT
                ในปัจจุบันนั้นยังต้องถูกพัฒนาเพิ่มในการออกแบบการเปลี่ยนมือผู้ถือครอง
                เพื่อให้งานด้านใบรับรองถูกขยายความกว้างเพิ่มขึ้น
                อีกทั้งการพัฒนาระบบที่เป็นบล็อกเชนเพียวนั้นเป็นประเดนที่น่าสนใจ
                หากการออกแบบและการบันทึกระบบที่ใช้บล็อกเชนโดยไม่มีการพึ่งพิงการบันทึกข้อมูลในดาต้าเบสแยกนั้นทำให้ไม่ต้องมีค่าใช้จ่ายเพิ่มในการคิดเรื่องความปลอดภัยแยกส่วน
                ซึ่งในความท้าทายดังกล่าวของบล็อกเชนนั้นสอดคล้องกับปัญหาของสมาคมผู้เลี้ยงโคบราห์มันในประเทศไทย
                เมื่อการออกใบเพ็ดดีกรีนั้นล่าช้า และมีการปลอมแปลงเกิดขึ้น
                เพื่อเพิ่มมูลค่าให้กับโคบราห์มัน
                ดูเหมือนจะเป็นสิ่งเล้าให้เกิดการปลอมแปลงใบเพ็ดดีกรี
                ความเป็นไปได้ที่จะรวมข้อมูลโคบราห์มันในระบบเดิมแทบเป็นไปไม่ได้
                อีกทั้งการตรวจสอบนั้นต้องติดต่อสมาคมเพียงวิธีการเดียวและไม่สามารถตรวจสอบได้เร็วและทันต่อการซื้อขายเนื่องจากสมาคมทำงานตามเวลาราชการ
                ดังนั้นกรอบงานวิจัยนี้ นำเสนอ NFT CowCert
                ระบบต้นแบบบล็อกเชนสำหรับจัดการใบรับรองสายเลือดวัวพันธุ์โคบราห์มัน
                การออก การเปลี่ยนมือผู้ถือครอง
                การบล็อกโคบราห์มันในระบบกรณีการเสียชีวิตของโคบราห์มัน การตรวจสอบ
                รวมถึงการออกแบบการบันทึกเพียวบล็อกเชน
                เพื่อสร้างความเป็นไปได้ในการแชร์ข้อมูลหลายสมาคมได้
                ในระบบผ่านมาตรฐาน NFT ERC721 ของ Ethereum smart contract
                ใช้ร่วมกับ smart contract ของระบบ โดยตั่งชื่อระบบว่า NFT CowCert
                มีการแบ่งส่วน ดังนี้ ส่วนที่ 2
                ตรวจสอบโซลูชันใบรับรองที่ใช้บล็อกเชนที่มีอยู่ ส่วนที่
                3ให้การแนะนำแนวคิดที่เกี่ยวข้อง ส่วนที่ 4 อธิบายโครงร่างที่เสนอ
                ในหัวข้อที่ 5
                เราประเมินข้อดีของกรอบงานที่เสนอเหนือวิธีแก้ปัญหาที่มีอยู่
                บทความนี้ได้สรุปไว้ใน ส่วน ที่ 6
              </p>
              <h5>SECTION II.Related Work</h5>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ด้วยเทคโนโลยี Blockchain
                มีคุณสมบัติทั้ง ความโปร่งใส ตรวจสอบได้ และป้องกันการปลอมแปลงได้
                การสำรวจ blockchain ในด้านการศึกษานั้น Bahrami, M., Movahedian,
                D. and Deldari, A. ออกแบบ solution Smaert contract
                ใช้ร่วมกับการออกและการตรวจสอบใบรับรองทางวิชาการ [1]
                พิจารณาแนวทางแก้ปัญหาในการเรียนออนไลน์ร่วมกับ Blockchain
                โดยใช้กระเป่าเงิน Wallet [2] ใช้ประโยชน์จากค่า Hash
                ธุรกรรมมาบันทึกลงกระดาษเป็น QR Hash ธุรกรรมจึงยากต่อการปลอมแปลง
                [3] ใช้ Smart contract
                ตรวจสอบใบรับรองมีการเพิกถอนหรือไม่ผ่านบทบาท 3 ระดับ [4] ใช้
                Blockchain บันทึกเอกสารราชการ เช่น เอกสารทางการเงิน
                และใบรับรองทางการศึกษา [5] มี SecureCert Blockchain
                แทนระบบที่ออกโดยกระดาษ [6] หรือ การสำรวจเครื่องมือในการพัฒนา
                blockchain ที่เหมาะสมสำหรับใบรับรอง [7] Data Market Austria
                (DMA) แนะนำBlockchain
                ในการโหวดรับสมาชิกและสัญญาทางกฎหมายในตลาดข้อมูลแบบกระจาย [8]
                องค์กรสหประชาชาติ CITES ใช้ Blockchain
                ร่วมกับเอกสารกระดาษทำให้การส่งออกสัตว์สามารถตรวจสอบโดยหน่วยงาน
                CITES
                ระหว่างประเทศได้ทันท่วงทีทำให้ป้องกันการลักลอบนำเข้าสัตว์ที่ใกล้ศูนย์พันได้
                [9] Jintapitak, M., et al. เสนอแนวคิดการใช้ Blockchain
                ตรวจสอบการผลิตแมลงเพื่อเป็นเมนูอาหารทางเลือก
                ด้านอสังหาริมทรัพย์มีการนำ Blockchain [10]
                เก็บข้อมูลโฉนดที่ดินหรือบ้านแทนระบบระเบียนในฐานข้อมูลเพียงอย่างเดียว
                [11] ใช้ Smart contract ออกแบบขั้นตอนวิธีการเก็บเอกสารในระบบไฟล์
                IPFS เป็นฐานข้อมูลกระจายในรูปแบบ Hash โดยที่เครือข่าย IPFS Has
                ของเอกสารเก็บไว้ใน Blockchain [12]
                เพื่อป้องกันปัญหาการคอรัปชั่นด้านภาษีให้มันใจได้ว่าผู้ซื้อและผู้ขายนั้นขายทรัพย์สินนั้นตามราคาที่ถูกประเมินไว้อย่างถูกต้อง
                [13] มีการซื้อขายทรัพย์สินผ่าน Smart contract
                เมื่อการซื้อขายเสร็จสิ้นผู้ซื้อจะได้รับกรรมสิทธิ์เอกสารดิจิทัลที่สามารถนำไปขายได้ในที่สุด
                [14] มาตรฐาน ERC721
                ถูกปรับใช้เพื่อการออกเหรียญที่มีคุณสมบัติเฉพาะและไม่เหมือนใครทำให้สามารถระบุภาพงานศิลปะหรือสินค้าที่เป็นเอกลักไม่เหมือนใครได้และยังสามารถตรวจสอบผู้เป็นเจ้าของได้โดย
                function มาตรฐานที่ถูกใช้เช่น ownerOf() [15]
                ข้อมูลการรับรองทั้งหมดจะถูกจัดเก็บไว้ใน NFT
                นักเรียนจะต้องบันทึกที่อยู่กระเป๋าเงิน NFT
                ของพวกเค้าแทนที่จะเก็บใบรับรองดิจิทัลด้วยตนเอง [16]
                หนึ่งในความท้าทายหลักเกี่ยวกับการจัดเก็บข้อมูลบนบล็อกเชนคือการเติบโตแบบทวีคูณของขนาดบล็อกเชน
                เมื่อข้อมูลไม่สามารถลบออกได้จะส่งผลให้มีการสะสมของข้อมูลและสารสนเทศ
                ดังนั้นบิ๊กดาต้าจะถูกจำลองแบบไปยังโหนดอื่น ๆ
                และในที่สุดจะทำให้ขนาดบล็อกเชนใหญ่เกินไป
                เมื่อบล็อกถูกเพิ่มเข้าไปในบล็อกเชนแล้ว จะไม่สามารถเปลี่ยนแปลงได้
                ดังนั้น
                ข้อมูลจึงสามารถแทรกลงในบล็อกเชนเท่านั้นโดยไม่มีความสามารถในการ
                “ลบ” หรือ “อัปเดต”
                ซึ่งการแก้ไขที่ผ่านมามีการบันทึกข้อมูลแยกและนำ Hash
                ไปบันทึกในบล็อกเชนแทน [17]
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                บล็อกเชนที่ผ่านมากจากการศึกษาเป็นลักษณะของการออกให้แก่ตัวบุคคล
                ไม่สามารถเปลี่ยนเจ้าของได้
                ดังนั้นงานวิจัยนี้ต้องการออกแบบระบบบล็อกเชน certificate
                ให้รองรับการเปลี่ยนเจ้าของได้
                โดยมีผู้ได้รับประโยชน์จากการแก้ปัญหางานเหล่านี้คือสมาคมผู้เลี้ยงโคบราห์มัน
                ผู้วิจัยจึงใช้ความต้องการนี้เพื่อเป็นเคสต้นแบบเพื่อเสนอการออกแบบที่จะสอดรับกับความต้องการระบบที่กล่าวมา
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                อีกประการคือผู้วิจัยต้องการนำเสนอการบันทึกบล็อกเชนโดยไม่มีการผสมผสานระหว่าง
                บล็อกเชน offline และแบบ online เข้าด้วยกัน
                เพื่อแสดงให้เห็นการใช้บล็อกเชนแบบไม่ใช้ดาต้าเบสร่วม
                การใช้บล็อกเชนแบบนี้จะทำให้ไม่ต้องออกแบบความปลอดภัยเพิ่มเติมในส่วนของการบันทึกแยก
                เพราะไม่ต้องพึ่งพาดาต้าเบส offline
                แต่จะต้องมีการออกแบบกระบวนการเก็บข้อมูลลงใน
                บล็อกเชนเนื่องจากจะมีปัญหาเรื่องของการบวมของข้อมูลได้
                วิจัยนี้จึงต้องการเสนอการออก การบันทึก NFT CowCert
                โดยไม่ใช้ดาต้าเบสร่วม
                อีกทั้งเพื่อสร้างความเป็นไปได้ที่จะเพิ่มโอกาสให้กับสมาคมโคบราห์มันต่าง
                ๆ ได้มีความน่าเชื่อถือในการแชร์ข้อมูลซึ่งกันและกัน
              </p>
              <h5>SECTION III.Background</h5>
              <p>
                ในส่วนนี้ เราจะแนะนำคำศัพท์สั้น ๆ
                ที่จะนำไปใช้ในกรอบการทำงานที่เสนอโดยย่อ:<br></br>
                <br></br>
                <h5>NFT CowCert</h5>
                ระบบต้นแบบสำหรับจัดการใบรับรองของสมาคมผู้เลี้ยงโคบราห์มัน
                แบบเพียวบล็อกเชน Decentralized
                ทำให้ระบบนี้ไม่มีหน่วยงานหรือสมาคมใดเป็นเจ้าของอย่างแท้จริง
                <br></br>
                <br></br>
                <h5>Ethereum Blockchain</h5>
                Ethereum เป็นมากกว่าแค่การถ่ายโอนสกุลเงินเข้ารหัส
                และยังช่วยให้นักพัฒนาปรับใช้สคริปต์สัญญาอัจฉริยะของระบบ Turing
                ที่สมบูรณ์ได้ [17]<br></br>
                <br></br>
                <h5>Smart contract</h5>
                กระบวนการทางดิจิทัล
                ที่กำหนดขั้นตอนการทำธุรกรรมโดยอัตโนมัติไว้ล่วงหน้า
                โดยไม่ต้องอาศัยตัวกลาง Ethereum ดำเนินการเอาระบบ Turing
                ที่สมบูรณ์เพื่อย้ายสินทรัพย์ดิจิทัลโดยอัตโนมัติตามกฎเกณฑ์ที่กำหนดไว้ล่วงหน้าที่เรียกว่าสัญญาอัจฉริยะ
                เนื้อหาและเงื่อนไขของการดำเนินการถูกกำหนดไว้ล่วงหน้าในสัญญาอัจฉริยะและจะดำเนินการโดยอัตโนมัติเมื่อตรงตามเงื่อนไข
                [17 ]<br></br>
                <br></br>
                <h5>ERC721</h5>
                <p>
                  มาตรฐานที่ทำให้ข้อมูลที่เป็นดิจิทัลหรือโทเคนนั้นมีความเฉพาะตัว(Non-Fungible)โดยส่วนมากมักจะถูกนำไปใช้กับของสะสมต่าง
                  ๆ ที่อยู่ในรูปแบบดิจิทัล
                  ที่ต้องการให้มีความหายากและไม่เหมือนใคร ไม่สามารถทำซ้ำได้
                  เพราะว่ามันมีโค้ดที่สามารถระบุได้ว่าใครเป็นเจ้าของอย่างชัดเจน
                  [17] MetaMask เป็นกระเป๋าที่เชื่อมต่อกับโลก Decentralized
                  Finance และ Application ที่เกี่ยวข้อง เช่น การ Swap เหรียญ,
                  เกม NFT เเละอื่น ๆ
                  โดยเป็นกระเป๋าเงินดิจิทัลที่มีความปลอดภัยค่อนข้างสูง
                  เพราะมีเพียงแค่เจ้าของบัญชีที่รู้รหัสเข้าถึงกระเป๋าตัวนี้คนเดียวเท่านั้น
                </p>
                <h5>SECTION IV.NFT CowCert</h5>
                <p>
                  การออกแบบนั้นจะอธิบายกระบวนการโดยรวมของระบบและเครื่องมือที่จำเป็นในการพัฒนาระบบ
                  NFT CowCert ขึ้นมาโดยจะถูก Deploy smart contract ไปยัง Binance
                  testnet เพื่อจำลอง node มีการปรับใช้มาตราฐานsmart contract ของ
                  ETH คือ ERC721 ร่วมกับ smart contract
                  ที่ผู้วิจัยออกแบบขึ้นรายละเอียดภาพรวมของระบบมีดังต่อไปนี้
                </p>
                <h5></h5>
              </p>
              4.1 ภาพรวมของกระบวนการออกแบบ<br></br>
              ในภาพรวมของกระบวนการ NFT CowCert
              นั้นได้อธิบายกระบวนการพอสังเขปไว้ดังนี้
              <br></br>
              <br></br>
              <img className="Fig1" src="../assets/images/Fig1.png" alt="" />
              <p></p>
            </div>
          </div>
          {/* <div class="row">
            <div class="col-md-6 col-lg-3 pb-5">
              <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center">
                  <i class="fa fa-truck fa-lg"></i>
                </div>
                <h2 class="h5 mt-4 text-center">Delivery Services</h2>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
              <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center">
                  <i class="fas fa-exchange-alt"></i>
                </div>
                <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
              <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center">
                  <i class="fa fa-percent"></i>
                </div>
                <h2 class="h5 mt-4 text-center">Promotion</h2>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
              <div class="h-100 py-5 services-icon-wap shadow">
                <div class="h1 text-success text-center">
                  <i class="fa fa-user"></i>
                </div>
                <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
              </div>
            </div>
          </div> */}
        </section>
        {/* <!-- End Section --> */}
      </>
    );
  }
}

export default Abount;
