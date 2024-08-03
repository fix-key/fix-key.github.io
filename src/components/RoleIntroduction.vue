<script setup>
import { defineProps } from 'vue'
import { roleList } from '@/utils/RoleList.js'

const { Aida, LiMo, Dakui, Lamia, AiMu, Lisa } = roleList

defineProps({
  name: {
    type: String
  }
})
</script>

<template>
  <div class="RoleIntroduction">
    <div id="Aida" v-if="name === 'Aida'">
      <el-image :src="Aida" alt="" />
      <div id="underline">
        <span></span>
        <p id="name">艾妲拉姆·葛蘭特</p>
      </div>
    </div>
    <div id="LiMo" v-if="name === 'LiMo'">
      <el-image :src="LiMo" alt="" />
      <div id="underline">
        <span></span>
        <p id="name">李莫</p>
      </div>
    </div>
    <div id="Dakui" v-if="name === 'Dakui'">
      <el-image :src="Dakui" alt="" />
      <div id="underline">
        <span></span>
        <p id="name">大魁·佛朗</p>
      </div>
    </div>
    <div id="Lamia" v-if="name === 'Lamia'">
      <el-image :src="Lamia" alt="" />
      <div id="underline">
        <span></span>
        <p id="name">菈米亞·多倫多</p>
      </div>
    </div>
    <div id="AiMu" v-if="name === 'AiMu'">
      <div id="info">
        <h3>
          <p id="num">
            <span>O</span><span>P</span><span>1</span><span>4</span
            ><span>1</span><span>4</span>
          </p>
          <p id="line">—</p>
          <p id="name">艾姆</p>
        </h3>
        <p id="content">
          由麗莎植入了情感迴路的年輕機器人，被賦予艱困的任務目標「尋找地球」，然而他當第二次甦醒時，面對的卻是空無一人的太空船。
        </p>
        <div id="triangle"></div>
        <div id="inner"></div>
      </div>

      <el-image :src="AiMu" alt="" />
    </div>
    <div id="Lisa" v-if="name === 'Lisa'">
      <el-image :src="Lisa" alt="" />
      <div id="info">
        <h3>麗莎·亞當斯</h3>
        <p id="content">
          相信地球一定存在的年輕科學家，創造了機器人艾姆的她，心中深藏著不可告人的秘密。艾姆再次甦醒時已失蹤。
        </p>
        <div id="triangle"></div>
        <div id="inner"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RoleIntroduction {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  #Aida {
    position: absolute;
    top: 7rem;
    left: 13rem;
    z-index: 99;

    .el-image {
      height: 52rem;
    }

    #underline {
      position: absolute;
      top: 3.8rem;
      left: 11rem;

      span {
        position: absolute;
        top: 3.5rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-left: 0.1rem solid #eba518;
        transform: rotate(54deg);
      }

      #name {
        position: relative;
        top: 0;
        left: 0.7rem;
        width: 15rem;
        border-bottom: 0.1rem solid #eba518;
        text-align: center;
        color: #fff;
        font-size: 1.8rem;
        font-family: 'pingFangSC-Bold';
        padding: 0.4rem;
      }
    }
  }

  #LiMo {
    position: absolute;
    top: 7rem;
    right: 13rem;
    z-index: 99;

    .el-image {
      height: 52rem;
    }

    #underline {
      position: absolute;
      top: 5.8rem;
      left: -13rem;

      span {
        position: absolute;
        top: 1.3rem;
        right: -2.2rem;
        display: inline-block;
        width: 1rem;
        height: 2rem;
        border-left: 0.1rem solid #eba518;
        transform: rotate(302deg);
      }

      #underline_text {
        position: relative;
        top: -1.3rem;
        left: 0.6rem;
        width: 15rem;
        border-bottom: 0.1rem solid #eba518;
        text-align: left;
        color: #fff;
        font-size: 1.8rem;
        font-family: 'pingFangSC-Bold';
        padding: 0.4rem;
      }
    }
  }

  #Dakui {
    position: absolute;
    top: 5rem;
    left: 0;
    z-index: 99;

    .el-image {
      height: 58rem;
    }

    #underline {
      position: absolute;
      top: 3.4rem;
      left: 18.3rem;

      span {
        position: absolute;
        top: 2.8rem;
        display: inline-block;
        width: 1rem;
        height: 4rem;
        border-left: 0.1rem solid #eba518;
        transform: rotate(58deg);
      }

      #underline_text {
        position: relative;
        top: 0;
        left: 1.9rem;
        width: 15rem;
        border-bottom: 0.1rem solid #eba518;
        text-align: left;
        color: #fff;
        font-size: 1.8rem;
        font-family: 'pingFangSC-Bold';
        padding: 0.4rem;
      }
    }
  }

  #Lamia {
    position: absolute;
    top: 9rem;
    right: 3rem;
    z-index: 99;

    .el-image {
      height: 54rem;
    }

    #underline {
      position: absolute;
      top: 2.6rem;
      left: -15.2rem;

      span {
        position: absolute;
        top: 1.7rem;
        right: -2.3rem;
        display: inline-block;
        width: 1rem;
        height: 2rem;
        border-left: 0.1rem solid #eba518;
        transform: rotate(302deg);
      }

      #underline_text {
        position: relative;
        top: -0.8rem;
        left: 0.7rem;
        width: 15rem;
        border-bottom: 0.1rem solid #eba518;
        text-align: left;
        color: #fff;
        font-size: 1.8rem;
        font-family: 'pingFangSC-Bold';
        padding: 0.4rem;
      }
    }
  }

  #AiMu {
    position: absolute;
    left: 14rem;
    bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    #info {
      position: relative;
      top: -1.4rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 15rem;
      height: 32rem;
      border: 0.2rem solid #000;
      border-radius: 1.2rem;
      background-color: #fff;
      padding: 3.2rem 2.5rem 5rem 2.5rem;
      line-height: 2rem;
      box-sizing: border-box;

      #triangle {
        position: absolute;
        left: 3rem;
        bottom: -2.2rem;
        width: 3rem;
        height: 2.2rem;
        background-color: #000;
        clip-path: polygon(0 0, 1.9rem 2.2rem, 2.3rem 0);
      }

      #inner {
        position: absolute;
        bottom: -1.8rem;
        left: 3.1rem;
        width: 2rem;
        height: 2rem;
        background-color: #fff;
        clip-path: polygon(0 0, 1.7rem 1.9rem, 2rem 0);
        z-index: 1;
      }

      h3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.4rem;
        margin-top: 0.2rem;

        #num {
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            color: #21218e;
            font-size: 1.8rem;
            font-family: 'pingFangSC-Regular';
            line-height: 1.7rem;
          }
        }

        #line {
          color: #21218e;
          writing-mode: vertical-rl;
          margin-top: 0.4rem;
        }

        #name {
          color: #21218e;
          font-size: 1.8rem;
          font-family: 'pingFangSC-Regular';
          writing-mode: vertical-rl;
          margin-top: 0.4rem;
        }
      }

      #content {
        color: #000;
        font-size: 1.3rem;
        writing-mode: vertical-rl;
        line-height: 1.8rem;
        letter-spacing: 0.1rem;
      }
    }

    .el-image {
      height: 17.3rem;
    }
  }

  #Lisa {
    display: flex;
    position: absolute;
    right: 1rem;
    bottom: 1rem;

    #info {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      position: relative;
      top: -4.2rem;
      width: 17rem;
      height: 44.6rem;
      background-color: #fff;
      border: 0.2rem solid #000;
      border-radius: 1.2rem;
      margin-left: 3rem;
      padding: 2.4rem 3rem;

      #triangle {
        position: absolute;
        left: -2rem;
        bottom: 12rem;
        width: 3rem;
        height: 3rem;
        background-color: #000;
        clip-path: polygon(0 0, 2rem 3rem, 2rem 0);
      }

      #inner {
        position: absolute;
        left: -2rem;
        bottom: 12rem;
        width: 3rem;
        height: 3rem;
        background-color: #fff;
        clip-path: polygon(0.4rem 0.2rem, 2.3rem 3rem, 2rem 0.2rem);
        z-index: 1;
      }

      h3 {
        color: #21218e;
        font-size: 1.8rem;
        font-family: 'pingFangSC-Regular';
        writing-mode: vertical-rl;
        margin-left: 0.4rem;
      }

      #content {
        color: #000;
        font-size: 1.3rem;
        writing-mode: vertical-rl;
        line-height: 1.8rem;
        letter-spacing: 0.1rem;
      }
    }

    .el-image {
      height: 45rem;
    }
  }
}
</style>
