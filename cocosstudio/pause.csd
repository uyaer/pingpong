<GameProjectFile>
  <PropertyGroup Type="Layer" Name="pause" ID="4faf46d7-c6be-4733-8ba8-981cacb61820" Version="2.2.8.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="70" Speed="1.0000">
        <Timeline ActionTag="-1650687737" Property="Position">
          <PointFrame FrameIndex="0" X="-120.0000" Y="602.5800" />
          <PointFrame FrameIndex="22" X="258.0627" Y="602.1416" />
          <PointFrame FrameIndex="26" X="191.2200" Y="602.5800" />
          <PointFrame FrameIndex="30" X="258.0627" Y="602.1416" />
          <PointFrame FrameIndex="40" X="258.0627" Y="602.1416" />
          <PointFrame FrameIndex="44" X="191.2200" Y="602.5800" />
          <PointFrame FrameIndex="48" X="258.0627" Y="602.1416" />
          <PointFrame FrameIndex="70" X="-120.0000" Y="602.5800" />
        </Timeline>
        <Timeline ActionTag="-1650687737" Property="Scale">
          <ScaleFrame FrameIndex="22" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="40" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="48" X="1.0000" Y="1.0000" />
        </Timeline>
        <Timeline ActionTag="-1650687737" Property="RotationSkew">
          <ScaleFrame FrameIndex="22" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="30" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="40" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="48" X="0.0000" Y="0.0000" />
        </Timeline>
        <Timeline ActionTag="835362817" Property="Position">
          <PointFrame FrameIndex="0" X="860.0000" Y="602.5800" />
          <PointFrame FrameIndex="22" X="473.0751" Y="602.5826" />
          <PointFrame FrameIndex="26" X="526.2300" Y="602.5800" />
          <PointFrame FrameIndex="30" X="473.0751" Y="602.5826" />
          <PointFrame FrameIndex="40" X="473.0751" Y="602.5826" />
          <PointFrame FrameIndex="44" X="526.2300" Y="602.5800" />
          <PointFrame FrameIndex="48" X="473.0751" Y="602.5826" />
          <PointFrame FrameIndex="70" X="860.0000" Y="602.5800" />
        </Timeline>
        <Timeline ActionTag="835362817" Property="Scale">
          <ScaleFrame FrameIndex="22" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="40" X="1.0000" Y="1.0000" />
          <ScaleFrame FrameIndex="48" X="1.0000" Y="1.0000" />
        </Timeline>
        <Timeline ActionTag="835362817" Property="RotationSkew">
          <ScaleFrame FrameIndex="22" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="30" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="40" X="0.0000" Y="0.0000" />
          <ScaleFrame FrameIndex="48" X="0.0000" Y="0.0000" />
        </Timeline>
        <Timeline ActionTag="1304545356" Property="Position">
          <PointFrame FrameIndex="0" X="368.9595" Y="1280.0000" />
          <PointFrame FrameIndex="22" X="368.9595" Y="760.0000" />
          <PointFrame FrameIndex="26" X="368.9595" Y="825.0000" />
          <PointFrame FrameIndex="30" X="368.9595" Y="760.0000" />
          <PointFrame FrameIndex="40" X="368.9595" Y="760.0000" />
          <PointFrame FrameIndex="44" X="368.9595" Y="825.0000" />
          <PointFrame FrameIndex="48" X="368.9595" Y="760.0000" />
          <PointFrame FrameIndex="70" X="368.9595" Y="1280.0000" />
        </Timeline>
        <Timeline ActionTag="1304545356" Property="FrameEvent">
          <EventFrame FrameIndex="30" Tween="False" Value="showOver" />
          <EventFrame FrameIndex="48" Tween="False" Value="showOver" />
          <EventFrame FrameIndex="70" Tween="False" Value="hideOver" />
        </Timeline>
      </Animation>
      <ObjectData Name="Layer" Tag="8" ctype="GameLayerObjectData">
        <Size X="720.0000" Y="1280.0000" />
        <Children>
          <AbstractNodeData Name="replayBtn" ActionTag="-1650687737" Tag="9" IconVisible="False" LeftMargin="-192.5000" RightMargin="767.5000" TopMargin="633.4200" BottomMargin="558.5800" TouchEnable="True" FontSize="14" Scale9Enable="True" Scale9Width="145" Scale9Height="88" ctype="ButtonObjectData">
            <Size X="145.0000" Y="88.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-120.0000" Y="602.5800" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="-0.1667" Y="0.4708" />
            <PreSize X="0.2014" Y="0.0688" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="MarkedSubImage" Path="res/backbtn_press.png" Plist="res.plist" />
            <PressedFileData Type="MarkedSubImage" Path="res/backbtn_press.png" Plist="res.plist" />
            <NormalFileData Type="MarkedSubImage" Path="res/backbtn.png" Plist="res.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="playBtn" ActionTag="835362817" Tag="11" IconVisible="False" LeftMargin="788.0000" RightMargin="-212.0000" TopMargin="633.4200" BottomMargin="558.5800" TouchEnable="True" FontSize="14" Scale9Enable="True" Scale9Width="144" Scale9Height="88" ctype="ButtonObjectData">
            <Size X="144.0000" Y="88.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="860.0000" Y="602.5800" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="1.1944" Y="0.4708" />
            <PreSize X="0.2000" Y="0.0688" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="MarkedSubImage" Path="res/splaybtn_press.png" Plist="res.plist" />
            <PressedFileData Type="MarkedSubImage" Path="res/splaybtn_press.png" Plist="res.plist" />
            <NormalFileData Type="MarkedSubImage" Path="res/splaybtn.png" Plist="res.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="txt_pause_1" ActionTag="1304545356" Tag="12" FrameEvent="hideOver" IconVisible="False" LeftMargin="209.4595" RightMargin="191.5405" TopMargin="-42.0000" BottomMargin="1238.0000" ctype="SpriteObjectData">
            <Size X="319.0000" Y="84.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="368.9595" Y="1280.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5124" Y="1.0000" />
            <PreSize />
            <FileData Type="MarkedSubImage" Path="res/txt_pause.png" Plist="res.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>